import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {green100, green500, green700} from 'material-ui/styles/colors';

import App from './app'

const app = express();

function handleRender(req, res) {
  
  const muiTheme = getMuiTheme({
    
  }, {
    avatar: {
      borderColor: null,
    },
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.82 Safari/537.36',
  });

  const html = renderToString(
    <MuiThemeProvider muiTheme={muiTheme}>
      <App />
    </MuiThemeProvider>
  )

  res.send(renderFullPage(html))
}

function renderFullPage(html) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>React Lab</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
      </head>
      <body>
        ${html}

        <script src="/static/app.bundle.js"></script>
      </body>
    </html>
    `
}

app
    .use('/static', express.static('static'))
    .use(handleRender)
    .listen("8069", "127.0.0.1", () => console.log("Listening on localhost:8069"));