import React from 'react';
import Button from '../components/Button'
import Search from './SearchContainer'
import ReactModal from 'react-modal'

const customStyles = {
   content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginTop: '4px',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '600px',
      height: '600px',
      padding: '0px',
   }
};

export class DesignFirstPage extends React.Component {
   render() {
      return (
         <div className="sc-jWBwVP hwqTUd">
            <div className="sc-brqgnP lldGUU">
               <div className="sc-cMljjf bkWXkB">
                  <div className="sc-jAaTju iyrkEi">Wage Compete<span>.</span></div>
               </div>
               <div className="sc-ifAKCX hRTQN">
                  <div className="sc-EHOje hVhGMN">
                     <h1>See how you rank against your peers</h1>
                     <p>Link your payroll account to compare your wages</p>
                  </div>

                  <div className="sc-htpNat euLjwl">
                     <Button type="submit" onClick={this.props.onSubmit} purple>
                        Compare your wage
                  </Button>
                     {this.props.showComponent ?
                        <div>
                           <ReactModal
                              style={customStyles}
                              isOpen={this.props.showModal}
                              overlayClassName="Overlay"
                           >
                              <Search
                                 options={this.props.results}
                                 history={this.props.history}
                                 onCloseModel={this.props.handleCloseModal}
                              />
                           </ReactModal>
                        </div>
                        :
                        null
                     }
                  </div>
                  <img src="../images/wage-graphs-530x505.svg" alt="Chart" className="sc-bZQynM BYGmW" />

               </div>
               <div className="sc-gqjmRU iDOEbu">
                  <h3 className="sc-dnqmqq jsIohK">Why join our beta?</h3>
                  <div className="sc-jzJRlG ieoJkb">
                     <div className="sc-VigVT iyXkUs">
                        <div className="sc-jTzLTM gBqsCg">
                           <div className="sc-chPdSV htgPDT">
                              <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                 <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"></path>
                              </svg>
                           </div>
                           <div className="sc-kAzzGY gvGerL">
                              <h3 className="sc-fjdhpX cjnsFo">Increase your earnings</h3>
                              <div className="sc-cSHVUG CAuLq">
                                 <div className="sc-iwsKbI jbKWCg">See how you compare with your peers and learn how much more you could be making.</div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="sc-VigVT iyXkUs">
                        <div className="sc-jTzLTM gBqsCg">
                           <div className="sc-chPdSV htgPDT">
                              <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                 <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"></path>
                              </svg>
                           </div>
                           <div className="sc-kAzzGY gvGerL">
                              <h3 className="sc-fjdhpX cjnsFo">1 minute registration</h3>
                              <div className="sc-cSHVUG CAuLq">
                                 <div className="sc-iwsKbI jbKWCg">You won’t spend more than 1 minute to complete the registration and join our beta.</div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="sc-VigVT iyXkUs">
                        <div className="sc-jTzLTM gBqsCg">
                           <div className="sc-chPdSV htgPDT">
                              <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                 <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></path>
                              </svg>
                           </div>
                           <div className="sc-kAzzGY gvGerL">
                              <h3 className="sc-fjdhpX cjnsFo">Be part of a rising startup</h3>
                              <div className="sc-cSHVUG CAuLq">
                                 <div className="sc-iwsKbI jbKWCg">Help build a tool that will help you get financial advice and improve your earning potential.</div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="sc-kgoBCf diQRFj">
                     <h3 className="sc-dnqmqq jsIohK">About the project</h3>
                     <p>Wage Compete is a category defining FinTech application. We're building the next generation of income intelligence tools - designed to help you optimize the money you take home.</p>
                     <p>Too many personal finance apps are focused on helping you save money. Well, you can only save money that you make in the first place. Wage Compete is building a suite of tools designed to give you information about how you are making money and give you reccomendations on ways to make more!</p>
                     <p>Join our limited beta to see how you can make more money.</p>
                  </div>
               </div>
               <div>
                  <h3 className="sc-dnqmqq jsIohK">What do customers say?</h3>
                  <div className="sc-jKJlTe eBquKk">
                     <div className="sc-eNQAEJ fVHKwP">
                        <img src="https://res.cloudinary.com/argyle-media/image/upload/v1600338483/workers-united/feedback-image-1.jpg" width="40" alt="Neil H" />
                        <div className="sc-kEYyzF gfWKdx">
                           <h4 className="sc-hMqMXs hbgDem">Neil H<span>Yesterday</span></h4>
                           <p className="sc-kkGfuU iDksoa">Wage comparison is such a simple yet powerful tool. It only takes a minute to register and see your comparison data.</p>
                        </div>
                     </div>
                     <div className="sc-eNQAEJ fVHKwP">
                        <img src="https://res.cloudinary.com/argyle-media/image/upload/v1600338479/workers-united/feedback-image-2.jpg" width="40" alt="Ester D." />
                        <div className="sc-kEYyzF gfWKdx">
                           <h4 className="sc-hMqMXs hbgDem">Ester D.<span>2 weeks ago</span></h4>
                           <p className="sc-kkGfuU iDksoa">I didn't realize how much money I was leaving on the table until comparing my income with Wage Compete.</p>
                        </div>
                     </div>
                     <div className="sc-eNQAEJ fVHKwP">
                        <img src="https://res.cloudinary.com/argyle-media/image/upload/v1600338476/workers-united/feedback-image-3.jpg" width="40" alt="Trisha W." />
                        <div className="sc-kEYyzF gfWKdx">
                           <h4 className="sc-hMqMXs hbgDem">Trisha W.<span>6 weeks ago</span></h4>
                           <p className="sc-kkGfuU iDksoa">I can't wait for Wage Compete to launch new features.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="sc-dfVpRl gQEOBy">
               <div className="sc-kTUwUJ kwFiNo"><div className="sc-dqBHgY etIerM">© Copyright Wage Compete</div>
                  <a href="/terms/legal-terms"><div className="sc-gzOgki kPcsbk">Legal Terms</div></a><img src="../images/footer-illustration.svg" className="sc-gxMtzJ iZvCAC" alt="Footer" />
               </div>
            </div>
         </div>
      );
   }
}

export default DesignFirstPage;