import React from 'react';

const addRows = (rows, className, text)=> {
  const row = [];
  for(let i = 0; i < rows; i++ ) {
    row.push({
      className,
      text
    });
  }

  return row;
}

const renderRow = row => (
  <div className='row'>
    {
      row.map((column, i) => (
        <div  key={i} className={column.className}>
          {column.text}
        </div>)
      )
    }
  </div>
)


const About = () => {
  const row1 = addRows(2, 'col-1-of-2', 'Col 1 of 2')
  const row2 = addRows(3, 'col-1-of-3', 'Col 1 of 3')
  const row4 = addRows(4, 'col-1-of-4', 'Col 1 of 4')
  return (
    <section>
      { renderRow(row1) }
      { renderRow(row2) }
      <div className='row'>
        <div className='col-1-of-3'>Col 1 of 3</div>
        <div className='col-2-of-3'>Col 2 of 3</div>
      </div>
      { renderRow(row4)}
      <div className='row'>
        <div className='col-1-of-4'>Col 1 of 4</div>
        <div className='col-1-of-4'>Col 1 of 4</div>
        <div className='col-2-of-4'>Col 2 of 4</div>
      </div>
      <div className='row'>
        <div className='col-1-of-4'>Col 1 of 4</div>
        <div className='col--of-4'>Col 3 of 4</div>
      </div>

    </section>
  )
}

export default About;
