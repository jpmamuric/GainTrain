import React from 'react';

const featureHeadings = [
  { header: 'Explore the World' },
  { header: 'Connect with Nature' },
  { header: 'Discover Your Path' },
  { header: 'Live a Healthier Life'}
];

const featureParagraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed neque feugiat lacus aliquet consectetur.';

const Features = () => {
  return (
    <section className='section-features' id='Benefits'>
      <div className='row'>
        {
          featureHeadings.map( (item, i) => (
            <div key={i} className='col-1-of-4'>
              <div className='feature-box'>
                <i className='feature-box__icon icon-basic-world'></i>
                <h3 className='heading-teriary util-margin-bottom-small'>{item.header}</h3>
                <p className='feature-box__text'>
                  { featureParagraph }
                </p>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Features;
