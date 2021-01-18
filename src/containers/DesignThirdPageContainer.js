import React from 'react';
import Chart from "react-apexcharts";
import styled from 'styled-components'

const StyledUserDetails = styled.div`
margin: 1rem auto 10rem 1.5rem;
  max-width: 70rem;
`

export class DesignThirdPage extends React.Component {
	render() {
		if (this.props.allIncomes !== null) {
			return (
				<div className="sc-jWBwVP hwqTUdT">
					<div className="sc-brqgnP lldGUUT">
						<div className="sc-cMljjf bkWXkB">
							<div className="sc-jAaTju iyrkEi">Wage Compete<span>.</span></div>
						</div>
						<div className="sc-ifAKCX hRTQN">
							<div className="sc-EHOje hVhGMA">

								<img width="50" height="50" className="sc-htoDjs loXBhR" alt="Logo" src={this.props.srcImg} />
								<h1>{this.props.providerName}</h1>
								<p className="hVhGMAP1"><span className="hVhGMAS2">Hi, {this.props.userName}!</span></p>
								<p className="hVhGMAP2">In the past 3 months you've earned <span className="hVhGMAS3">${this.props.userIncome.toFixed(2)}</span></p>
								<p> <span className="hVhGMAS1"> <span className="hVhGMAS4">&uarr; </span>{this.props.reportHigher} </span> of your colleagues have reported </p>
								<p>higher earnings</p>
								<p> <span className="hVhGMAS1"> <span className="hVhGMAS5">&darr; </span> {this.props.reportLower} </span> of your colleagues have reported </p>
								<p>lower earnings</p>
							</div>
							<div className="sc-bZQynM BYGmA">
								<div className="BYGmAD">
									<p className="BYGmAP1">Linked accounts <span className="BYGmAS1">&#10247;</span></p>
									<p className="BYGmAP2">{this.props.nrUsersLinked} people <span className="BYGmAS1"> + 0,7% <span className="BYGmAS2">&uarr; </span></span></p>
								</div>
							</div>
						</div>


						<StyledUserDetails>
							{this.props.showChart ?
								<div className="app">
									<div className="row">
										<div className="mixed-chart">
											<Chart
												options={{
													chart: {
														type: 'bar',
														height: 350
													},
													responsive: [
														{
															breakpoint: 767,
															options: {
																chart: {
																	width: '100%'
																}
															}
														}
													],
													title: {
														text: "Income Chart",
														align: 'left',
														margin: 10,
														offsetX: 0,
														offsetY: 0,
														floating: false,
														style: {
															fontSize: '16px',
															fontWeight: 'bold',
															fontFamily: undefined,
															color: '#263238'
														},
													},
													onItemHover: {
														highlightDataSeries: true
													},
													fill: {
														colors: [function ({ value, seriesIndex, w }) {
															if (value == localStorage.getItem('userI')) {
																return '#3260a8'
															}
															else {
																return '#7E36AF'
															}
														}]
													},
													plotOptions: {
														bar: {
															horizontal: true,
															startingShape: 'flat',
															endingShape: 'rounded',
															barHeight: '30%',
														}
													},
													dataLabels: {
														enabled: false
													},
													xaxis: {
														categories: this.props.allInitials,
														labels: {
															formatter: function (value, timestamp, opts) {
																return "$" + value
															}
														}
													}
												}}
												series={[{
													name: "Income $",
													data: this.props.allIncomes,
												}
												]}
												type="bar"
												width="600"
												height="300"

											/>
											<div className="legendD1">
												<div><div className="legendD2"></div> you &nbsp; &nbsp; &nbsp; &nbsp;</div>
												<div><div className="legendD3"></div> other users</div>
											</div>
										</div>
									</div>
								</div> :
								null
							}

						</StyledUserDetails>
						<div className="sc-dfVpRl gQEOBy">
							<div className="sc-kTUwUJ kwFiNo"><div className="sc-dqBHgY etIerM">© Copyright Wage Compete</div>
								<a href="/terms/legal-terms"><div className="sc-gzOgki kPcsbk">Legal Terms</div></a><img src="../images/footer-illustration.svg" className="sc-gxMtzJ iZvCAC" alt="Footer" />
							</div>
						</div>
					</div>
				</div>
			)
		}

		return (

			<div className="sc-jWBwVP hwqTUdT">
				<div className="sc-brqgnP lldGUUT">
					<div className="sc-cMljjf bkWXkB">
						<div className="sc-jAaTju iyrkEi">Wage Compete<span>.</span></div>
					</div>
					<div className="sc-ifAKCX hRTQN">
						<div className="sc-EHOje hVhGMA">

							<img width="50" height="50" className="sc-htoDjs loXBhR" alt="Logo" src={this.props.srcImg} />
							<h1>{this.props.providerName}</h1>
							<p className="hVhGMAP1"><span className="hVhGMAS2">Hi, {this.props.userName}!</span></p>
							<p className="hVhGMAP2">In the past 3 months you've earned <span className="hVhGMAS3">${this.props.userIncome.toFixed(2)}</span></p>
							<p> <span className="hVhGMAS1"> <span className="hVhGMAS4">&uarr; </span>{this.props.reportHigher} </span> of your colleagues have reported </p>
							<p>higher earnings</p>
							<p> <span className="hVhGMAS1"> <span className="hVhGMAS5">&darr; </span> {this.props.reportLower} </span> of your colleagues have reported </p>
							<p>lower earnings</p>
						</div>
						<div className="sc-bZQynM BYGmA">
							<div className="BYGmAD">
								<p className="BYGmAP1">Linked accounts <span className="BYGmAS1">&#10247;</span></p>
								<p className="BYGmAP2">{this.props.nrUsersLinked} people <span className="BYGmAS1"> + 0,7% <span className="BYGmAS2">&uarr; </span></span></p>
							</div>
						</div>
						<img src="../images/loading.gif" className="loading" />
					</div>
					<div className="sc-dfVpRl gQEOBy">
						<div className="sc-kTUwUJ kwFiNo"><div className="sc-dqBHgY etIerM">© Copyright Wage Compete</div>
							<a href="/terms/legal-terms"><div className="sc-gzOgki kPcsbk">Legal Terms</div></a><img src="../images/footer-illustration.svg" className="sc-gxMtzJ iZvCAC" alt="Footer" />
						</div>
					</div>
				</div>
			</div>

		)
	}
}

export default DesignThirdPage;