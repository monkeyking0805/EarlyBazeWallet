
const OurFeature = ({title}) => {
  return (
    <>
      <div className='features-area pt-100 pb-70'>
        <div className='container'>
          <div className='section-title'>
            <h2>{title}</h2>
            <p>
              Our Features are listed below and are available 24/7.
            </p>
          </div>
          <div className='row align-items-center justify-content-center'>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-features-box'>
                <img src='/images/features/features-img1.png' alt='image' />
                <h3>Security First</h3>
                <p>
                  We know the know the a secured system gives our users confidence
                  so we have made sure and created a secured link for all transactions.
                </p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-features-box'>
                <img src='/images/features/features-img2.png' alt='image' />
                <h3>Fast Payments</h3>
                <p>
                  Our Payment system is fast and within minutes you are been credited.
                </p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-features-box'>
                <img src='/images/features/features-img3.png' alt='image' />
                <h3>24/7 Support</h3>
                <p>
                  We are avialable 24/7 to answer questions and to help in the process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurFeature;
