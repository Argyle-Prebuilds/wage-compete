import React, { Component } from 'react'
import firebase from '../helpers/firebase'
import api from '../api/api'
import DesignThirdPage from './DesignThirdPageContainer'

class ThirdContainer extends Component {
	state = {
		nrUsersLinked: 0,
		idsUsersLinked: null,
		idsAccountsLinked: null,
		userIncome: 0,
		userName: null,
		userInitials: null,
		allInitials: null,
		allIncomes: null,
		usersIncome: [{}],
		reportHigher: 0,
		reportLower: 0,
		showChart: false,
		error: false,
		provider: null,
	}

	componentDidMount = async e => {
		var accountID = localStorage.getItem("accountId");
		const windowPathname = window.location.pathname;
		this.setState({
			provider: windowPathname.substr(1, windowPathname.length - 9)
		}, async () => {
			await api.getAccount(accountID).then((account) => {
				if (this.state.provider !== '' && account.data_partner !== this.state.provider) {
					this.props.history.push("/" + this.state.provider);
				} else {
					if (!localStorage.getItem('uid')) {
						const auth = firebase.auth()

						auth.signInAnonymously().catch(error => {
							console.log({ error })
						})

						auth.onAuthStateChanged(user => {
							if (user) {
								const { uid } = user
								localStorage.setItem('uid', uid)
							}
						})
					}
					this.users();
					this.userProfile();
					this.income();
				}
			});
		})
	}

	componentWillUnmount() {
		this.setState = (state, callback) => {
			return;
		};
	}

	checkURL = async e => {
		var accountID = localStorage.getItem("accountId");
		const windowPathname = window.location.pathname;
		const provider = windowPathname.substr(1, windowPathname.length - 9);
		await api.getAccount(accountID).then((account) => {
			if (account.data_partner !== provider) {
				this.setState({
					error: true
				})
			}
		});
	}

	userProfile = async e => {
		var accountID = localStorage.getItem("accountId");
		await api.getProfile(accountID).then((userprofile) => {
			var initialsArray = userprofile[0].full_name.split(" ");
			var initials = initialsArray[0].substring(0, 1) + initialsArray[1].substring(0, 1);
			this.setState({
				userName: userprofile[0].first_name,
				userInitials: initials
			})
		});
	}

	users = async e => {
		var rawFile = new XMLHttpRequest();
		rawFile.open("GET", '../users.txt', false);
		rawFile.onreadystatechange = () => {
			if (rawFile.readyState === 4) {
				if (rawFile.status === 200 || rawFile.status === 0) {
					var allText = rawFile.responseText;
					var contentFile = allText.split("\n");
					var usersLinked = 1;
					var usersIdsLinked = [];
					var userID = localStorage.getItem("userId");
					for (var m = 0; m < contentFile.length - 1; m++) {
						var lineParsed = JSON.parse(contentFile[m]);
						var employersArray = lineParsed.employers_connected.split(",");
						for (var n = 0; n < employersArray.length; n++) {
							if (this.state.provider === employersArray[n]) {
								if (lineParsed.id !== userID) {
									usersIdsLinked.push(lineParsed.id);
									usersLinked++;
								}
							}


						}
					}
					usersIdsLinked.push(userID);
					this.setState({
						nrUsersLinked: usersLinked,
					});
					this.setState({
						idsUsersLinked: usersIdsLinked,
					},
						() => {
							this.accounts().catch(e => {
								console.log(e);
							});
						});
				}
			}
		};
		rawFile.send(null);
	}

	accounts = async e => {
		var accountsIdsLinked = [];
		const windowPathname = window.location.pathname;
		const provider = windowPathname.substr(1, windowPathname.length - 9);
		for (var i = 0; i < this.state.idsUsersLinked.length; i++) {
			await api.getAccounts(this.state.idsUsersLinked[i]).then((accounts) => {
				for (var j = 0; j < accounts.length; j++) {
					if (accounts[j].data_partner === provider) {
						accountsIdsLinked.push(accounts[j].id);
					}
				}
			});
		}
		this.setState({
			idsAccountsLinked: accountsIdsLinked,
		}, () => {
			this.incomeOtherUsers().catch(e => {
				console.log(e);
			});
		});
	}

	income = async e => {
		var accountID = localStorage.getItem("accountId");
		await api.getPayouts(accountID).then((incomes) => {
			var sumIncome = 0;
			var maxDate = new Date();
			var minDate = maxDate;
			minDate.setMonth(minDate.getMonth() - 3);
			for (var i = 0; i < incomes.length; i++) {
				if (new Date(incomes[i].payout_date) > minDate && new Date(incomes[i].payout_date) < maxDate) {
					sumIncome += Number(incomes[i].gross_pay);
				}
			}
			this.setState({
				userIncome: sumIncome,
			});
			localStorage.setItem("userI", sumIncome.toFixed(2));
		})
	}

	incomeOtherUsers = async e => {
		var sumIncomeArray = [{}];
		for (var j = 0; j < this.state.idsAccountsLinked.length; j++) {
			var sumIncome = 0;
			var innerObj = {};
			innerObj[0] = this.state.idsAccountsLinked[j];
			await api.getPayouts(this.state.idsAccountsLinked[j]).then(async (incomes) => {
				var maxDate = new Date();
				var minDate = maxDate;
				minDate.setMonth(minDate.getMonth() - 3);
				for (var i = 0; i < incomes.length; i++) {
					if (new Date(incomes[i].payout_date) > minDate && new Date(incomes[i].payout_date) < maxDate) {
						sumIncome += Number(incomes[i].gross_pay);
					}

				}
				innerObj[1] = sumIncome;

				await api.getProfile(innerObj[0]).then((userprofile) => {
					var initialsArray = userprofile[0].full_name.split(" ");
					var initials = initialsArray[0].substring(0, 1) + initialsArray[1].substring(0, 1);
					innerObj[2] = initials
				});
				sumIncomeArray.push(innerObj);
			});
		}
		var sumIncomeArrayComplete = [];
		for (var m = 1; m < sumIncomeArray.length; m++) {
			sumIncomeArrayComplete.push(sumIncomeArray[m]);
		}
		this.setState({
			usersIncome: sumIncomeArrayComplete,
		}, () => {
			this.report().catch(e => {
				console.log(e);
			});
			this.getInitials().catch(e => {
				console.log(e);
			});
			this.getIncomes().catch(e => {
				console.log(e);
			});
		});
	}

	report = async e => {
		for (var i = 0; i < this.state.usersIncome.length; i++) {
			if (this.state.usersIncome[i][1] > this.state.userIncome) {
				this.setState((prevState, props) => ({
					reportHigher: prevState.reportHigher + 1
				}));
			} else if (this.state.usersIncome[i][1] < this.state.userIncome) {
				this.setState((prevState, props) => ({
					reportLower: prevState.reportLower + 1
				}));
			}
		}
	}

	getInitials = async e => {
		var initials = [];

		this.state.usersIncome.sort(function (a, b) {
			return b[1] - a[1];
		});

		for (var i = 0; i < this.state.usersIncome.length; i++) {
			initials.push(this.state.usersIncome[i][2]);
		}
		this.setState({
			allInitials: initials
		})
	}

	getIncomes = async e => {
		var incomes = [];

		for (var i = 0; i < this.state.usersIncome.length; i++) {
			incomes.push(this.state.usersIncome[i][1].toFixed(2));
		}
		this.setState({
			allIncomes: incomes,
		}, () => {
			this.setState({
				showChart: true,
			});

		})
	}


	render() {
		const providerName = localStorage.getItem('providerName');
		const srcImg = localStorage.getItem('srcImg');
		return (
			<DesignThirdPage srcImg={srcImg} providerName={providerName}
				userName={this.state.userName} userIncome={this.state.userIncome}
				reportHigher={this.state.reportHigher} reportLower={this.state.reportLower}
				nrUsersLinked={this.state.nrUsersLinked} showChart={this.state.showChart}
				allInitials={this.state.allInitials} allIncomes={this.state.allIncomes} />
		)
	}
}

export default ThirdContainer
