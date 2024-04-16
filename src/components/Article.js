import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import signature_eng from "../asset/signature_eng.png"
import signature_chi from "../asset/signature_chi.jpg"
import banner from "../asset/banner.jpg"
import { HashLink } from 'react-router-hash-link';

import '../style/Article.css'
import SignatureBlock from './SignatureBlock';

function Article() {
  return (
      <div className="container mt-5">
        <img className={'img-responsive banner'} alt="invite header"
             src={banner}></img>
        <div className={'mt-3'}>
          <h2>Norman's Life Story</h2>
          <p>Dear family, friends, and strangers 😊,</p>
          <p className={'fw-normal'}>Thank you for your kindness, support, and
            company
            throughout my life journey, where we have crossed
            paths and got to know each other. Thank you all for coming to this
            life story
            sharing session.
          </p>
          <p>The <a href={"https://youtu.be/VUPkmSqW7vs?si=9JTCS5QHRL4GzUAf"}>recording</a> of the sharing session is now made available down
            below.
            If you have any thoughts, or questions, etc., feel free to reach out
            to me <a href={'mailto:normanwqn@icloud.com'}>via email</a> or
            <a href={'+1 (734) 450-0103'}> +1 (734) 450-0103</a>. I am happy to
            talk
            personally 😀.
          </p>
          <p>Thank you again for being faithful friends and family in my life. I
            am privileged to be able to be
            used by God to be his "vessel" and witness what He has done in my
            life. May His peace be with you!</p>
          <SignatureBlock signature_src={signature_eng} date={"16 April 2024"}
                          end_greetings={"Yours faithfully,"}
                          alt_text={"Norman Qining Wen's Signature"}
                          max_width={"100%"}>
          </SignatureBlock>
        </div>
        <hr></hr>
        <div className={'mt-1'}>
          <h2>溫騏寧的人生故事</h2>
          <p>親愛的家人、朋友和陌生人 😊，</p>
          <p className={'fw-normal'}>感謝你們的善良、支持和陪伴
            在我的人生旅程中，我們的路途相交，
            並且彼此認識了。謝謝大家來參加這次的人生故事
            分享會。
          </p>
          <p>現在可以在下面找到分享會的<a href={"https://youtu.be/VUPkmSqW7vs?si=9JTCS5QHRL4GzUAf"}>錄影（僅有英文）</a>。
            如果您有任何想法，或問題等，隨時可以透過
            <a href={'mailto:normanwqn@icloud.com'}>電子郵件</a> 或
            <a href={'+1 (734) 450-0103'}>+1 (734) 450-0103</a> 與我聯繫。我很樂意與您git親自交談 😀。
          </p>
          <p>再次感謝你們成為我生命中忠實的朋友和家人。我很榮幸能夠
            被上帝使用成為他的「器皿」，並見證他在我生命中所做的一切。願祂的平安與你們同在！</p>
          <SignatureBlock signature_src={signature_chi} date={"2024年4月16日"}
                          end_greetings={"謹啟"}
                          alt_text={"溫騏寧的簽名"} max_width={"50%"}>
          </SignatureBlock>
        </div>
        <hr></hr>
        <iframe
            id={"life-story-video"}
            src="https://www.youtube.com/embed/VUPkmSqW7vs?si=3b-gZAcD73Pabae-"
            title="YouTube video player" frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen></iframe>
</div>
)
  ;
}

export default Article;
