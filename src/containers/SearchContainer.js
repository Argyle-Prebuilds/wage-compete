import React from 'react';
import PropTypes from 'prop-types';

export class Search extends React.Component {

  static propTypes = {
    options: PropTypes.instanceOf(Array).isRequired
  };
  state = {
    activeOption: 0,
    filteredOptions: [],
    showOptions: true,
    userInput: '',
    displayTenPartners: true,
  };


  onChange = (e) => {
    const { options } = this.props;
    const userInput = e.currentTarget.value;

    const filteredOptions = options.filter(
      (optionName) =>
        optionName.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      activeOption: 0,
      filteredOptions,
      showOptions: true,
      userInput: e.currentTarget.value,
      displayTenPartners: false,
    });
    if (userInput === '') {
      this.setState({
        displayTenPartners: true,
      })
    }
  };

  onClick = (e) => {
    this.setState({
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      userInput: e.currentTarget.innerText
    });
    this.props.history.push("/" + e.currentTarget.id);
  };

  onKeyDown = (e) => {
    const { activeOption, filteredOptions } = this.state;

    if (e.keyCode === 13) {
      this.setState({
        activeOption: 0,
        showOptions: false,
        userInput: filteredOptions[activeOption]
      });
    } else if (e.keyCode === 38) {
      if (activeOption === 0) {
        return;
      }
      this.setState({ activeOption: activeOption - 1 });
    } else if (e.keyCode === 40) {
      if (activeOption === filteredOptions.length - 1) {
        console.log(activeOption);
        return;
      }
      this.setState({ activeOption: activeOption + 1 });
    }
  };

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  render() {
    var {
      onChange,
      onClick,
      onKeyDown,

      state: { filteredOptions, showOptions, userInput, displayTenPartners }
    } = this;
    let optionList;
    if (showOptions && userInput !== -1) {
      if (filteredOptions.length && displayTenPartners === false && userInput.length > 0) {
        filteredOptions = filteredOptions.slice(0, 6);
        optionList = (
          <div data-hook="partner-list" className="PartnersList__DataPartnerItems-sc-183qyv7-0 fQokOv">
            {filteredOptions.map((optionName, index) => {
              var optionNameParsed = JSON.parse(optionName);
              var partnerName = optionNameParsed.name;
              var partnerId = optionNameParsed.id;
              var srcimg = "https://res.cloudinary.com/argyle-media/image/upload/d_placeholder.png,q_auto/partner-logos/" + optionNameParsed.id + ".png";
              return (
                <div data-hook="partner-item" data-partner-animation-item="partner-item" className="partnerItemCommon__ItemContainer-sqtt82-0 exxcQa" key={optionName}>
                  <div className="partnerItemCommon__LogoAndContent-sqtt82-2 fUuvJO">
                    <div className="PartnerLogo__LogoContainer-sc-6vtvkw-0 fMGvEr"><img src={srcimg} className="PartnerLogo__CenteredImage-sc-6vtvkw-1 hkQhsH" alt="Logo" /></div>
                    <div className="partnerItemCommon__Content-sqtt82-1 liXAiU">
                      <div className='option-active' id={partnerId} key={partnerId} onClick={onClick}>
                        {partnerName}
                      </div>
                      <div className="partnerItemCommon__Subtitle-sqtt82-4 iXiNtR connected" data-hook="partner-item-type">{this.capitalizeFirstLetter(optionNameParsed.type)}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      } else if (displayTenPartners === true) {
        const filteredOptionsTen = this.props.options.slice(0, 6);
        optionList = (
          <div data-hook="partner-list" className="PartnersList__DataPartnerItems-sc-183qyv7-0 fQokOv">
            {filteredOptionsTen.map((optionName, index) => {
              var optionNameParsed = JSON.parse(optionName);
              var partnerName = optionNameParsed.name;
              var partnerId = optionNameParsed.id;
              var srcimg = "https://res.cloudinary.com/argyle-media/image/upload/d_placeholder.png,q_auto/partner-logos/" + optionNameParsed.id + ".png";
              return (
                <div data-hook="partner-item" data-partner-animation-item="partner-item" className="partnerItemCommon__ItemContainer-sqtt82-0 exxcQa" key={optionName}>
                  <div className="partnerItemCommon__LogoAndContent-sqtt82-2 fUuvJO">
                    <div className="PartnerLogo__LogoContainer-sc-6vtvkw-0 fMGvEr"><img src={srcimg} className="PartnerLogo__CenteredImage-sc-6vtvkw-1 hkQhsH" alt="Logo" /></div>
                    <div className="partnerItemCommon__Content-sqtt82-1 liXAiU">
                      <div className='option-active' id={partnerId} key={partnerId} onClick={onClick} >
                        {partnerName}
                      </div>
                      <div className="partnerItemCommon__Subtitle-sqtt82-4 iXiNtR connected" data-hook="partner-item-type">{this.capitalizeFirstLetter(optionNameParsed.type)}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      } else {
        optionList = (
          <div className="no-options">
            <p>No Option!</p>
          </div>
        );
      }
    }
    return (

      <React.Fragment>
        <div className="PluginStyles__RouteContainer-sc-1o1ajdq-5 kOWsA">
          <div data-hook="header" className="Header__HeaderContainer-sc-1tdb3bh-0 eQoKAT">
            <div className="Header__LeftContainer-sc-1tdb3bh-4 ebIZnB">
              <div className="Header__LeftItem-sc-1tdb3bh-1 fqqaM">
                <div className="Tabs__Container-z1o20u-0 dkfKRG">
                  <div data-hook="partner-category-tab" className="Tabs__Tab-z1o20u-1 hZaqzF">Companies</div>
                </div>
              </div>
              <div className="Header__Title-sc-1tdb3bh-2 gYNqjO"></div>
            </div>
            <div className="Header__RightContainer-sc-1tdb3bh-3 eFhZLi"><a data-hook="close-button" onClick={this.props.onCloseModel} className="sc-bdVaJa jMZcZo" >close</a></div>
          </div>
          <div className="SearchBar__Search-o5xq66-0 iOmXEd">
            <div className="SearchBar__SearchBarWrapper-o5xq66-1 bWJtFE">
              <input data-hook="search-input" placeholder="Search" className="SearchBar__SearchInput-o5xq66-3 copkHg" onChange={onChange} onKeyDown={onKeyDown} value={userInput} />
              <hr className="search-line"></hr>
              <div>
                {optionList}
              </div>

              <div className="SearchBar__Clear-o5xq66-2 cPSetp">X</div>
            </div>
          </div>

        </div>
      </React.Fragment>
    );
  }
}

export default Search;
