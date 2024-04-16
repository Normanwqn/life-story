import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style/SignatureBlock.css"

function SignatureBlock({signature_src, end_greetings, alt_text, date, max_width}) {
  return (
      <div>
        <p>{end_greetings}</p>
        <div className={'row'}>
          <div className={'col-lg-4 col-md-5 col-sm-7 col-xs-7'}>
            <img src={signature_src} className={'img-responsive signature'}
                 alt={alt_text}
                  style={{maxWidth: max_width}}
            />
          </div>
        </div>
          <p>{date}</p>
      </div>
  );
}

export default SignatureBlock;