import React from 'react';

const DEFAULT_TITLE = 'DEFAULT_TITLE';
const DEFAULT_KEYWORDS = 'DEFAULT_KEYWORDS';
const DEFAULT_DESCRIPTION = 'DEFAULT_DESCRIPTION';

export const View = (props) => {
  const {
    title = DEFAULT_TITLE,
    keywords = DEFAULT_KEYWORDS,
    description = DEFAULT_DESCRIPTION,
    children,
    helper,
    pageName,
  } = props;

  const {
    ctx,
    helper: noNeed,
    request,
    ...wanted
  } = props;

  return (
    <html>
      <head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <meta name="screen-orientation" content="portrait" />
        <meta name="x5-orientation" content="portrait" />
        <meta name="format-detection" content="telephone=no,date=no,address=no,email=no,url=no" />
        <link rel="icon" href="https://rulifun.oss-cn-hangzhou.aliyuncs.com/static/image/logo-s.png" type="image/png" />
        <link rel="stylesheet" href="//macdn.microants.cn/app/h5/iyicaibao/assets/antd.min.css" />
        <link rel="stylesheet" href={helper.asset(`${pageName}.css`)} />
      </head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: `window.props=${JSON.stringify(wanted)};window.__ENV__=${JSON.stringify(props.__ENV__)}` }} />
        {children}
        <script src={helper.asset('manifest.js')} />
        <script src={helper.asset(`${pageName}.js`)} />
      </body>
    </html>
  );
};

export const Section = (props) => {
  const { className, children, title } = props;
  return (
    <section className={`section code-box-demo ${className || ''}`}>
      <h3 className="title">{title}</h3>
      {children}
    </section>
  );
};
