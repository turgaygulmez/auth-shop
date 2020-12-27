import React from "react";

const Footer = () => {
  const socialIcons = [
    {
      url: "https://www.facebook.com/",
      alt: "Facebook",
      icon:
        "https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/online_social_media_facebook-128.png"
    },
    {
      url: "https://twitter.com/",
      alt: "Twitter",
      icon:
        "https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/twitter_online_social_media-128.png"
    },
    {
      url: "https://www.instagram.com/",
      alt: "Instagram",
      icon:
        "https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/instagram_online_social_media_photo-128.png"
    }
  ];
  return (
    <footer className="footer">
      <div className="footer__social-icon">
        {socialIcons &&
          socialIcons.map((item, idx) => {
            return (
              <a
                key={idx}
                className="footer__social-icon__link"
                href={item.url}
              >
                <img
                  className="footer__social-icon__img"
                  alt={item.alt}
                  src={item.icon}
                />
              </a>
            );
          })}
      </div>

      <div className="footer__copy-right">Designed by &copy; Turgay Gulmez</div>
    </footer>
  );
};

export default Footer;
