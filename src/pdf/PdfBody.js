
import React from 'react';



const PdfBody = ()=>{
  
    
  
      return (
        <document
          pageMargins={[20, 20, 20, 20]}
          pageSize="A4"
          defaultStyle={{
            font: 'OpenSans',
          }}
          info={{
            author: 'Buzz Lightyear',
          }}
        >
          <header>Greeting</header>
          <content>hello, duvan</content>
          <footer>JSX-PDF, Inc.</footer>
      </document>
      )
}

export default PdfBody;




