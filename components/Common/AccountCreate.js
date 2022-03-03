
const AccountCreate = ({title}) => {
  return (
    <>
      <div className='account-create-process-area ptb-100'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-xl-8 col-lg-9 col-md-12'>
              <div className='account-create-process-content'>
                <div className='section-title'>
                  <h2>{title}</h2>
                  <p>
                    It is an easy process in getting started just follow the description below.
                  </p>
                </div>
                <div className='row justify-content-center'>
                  <div className='col-lg-4 col-sm-6 col-md-6'>
                    <div className='single-process-box'>
                      <div className='icon'>
                        <img src='/images/icon/icon1.png' alt='image' />
                      </div>
                      <h3>Create Account</h3>
                      <p>
                        Create an account by clicking on the login button at the top and then click ont the registration button and fill in your accurate details.
                      </p>
                    </div>
                  </div>
                  <div className='col-lg-4 col-sm-6 col-md-6'>
                    <div className='single-process-box'>
                      <div className='icon'>
                        <img src='/images/icon/icon2.png' alt='image' />
                      </div>
                      <h3>Link Your Wallet</h3>
                      <p>
                        Link your wallet to your resgisterd account.
                      </p>
                    </div>
                  </div>
                  <div className='col-lg-4 col-sm-6 col-md-6'>
                    <div className='single-process-box'>
                      <div className='icon'>
                        <img src='/images/icon/icon3.png' alt='image' />
                      </div>
                      <h3>Start Selling</h3>
                      <p>
                        Input amount of coin you want as exchange for cash and a calculator lets you know how much you will receive in cash paid to your bank account.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-lg-3 col-md-12'>
              <div className='account-create-process-image text-center'>
                <img src='/images/convert-currency.png' alt='image' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountCreate;
