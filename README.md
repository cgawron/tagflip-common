![release](https://github.com/fhswf/tagflip-common/workflows/release/badge.svg)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/88df45f8d2f74fc9a316463b686ddef5)](https://app.codacy.com/gh/fhswf/tagflip-common?utm_source=github.com&utm_medium=referral&utm_content=fhswf/tagflip-common&utm_campaign=Badge_Grade)

# Tagflip 

[Tagflip](https://jupiter.fh-swf.de/tagflip) is an online tagging tool similar to [BRAT](https://brat.nlplab.org/) or [WebAnno](https://webanno.github.io/webanno/).

## Why another online tagging tool?
While BRAT is rather lightweight, it runs only on UNIX-like environments and is a little outdated (Python 2.5 and CGI interface).
WebAnno is actively maintained, but it uses a UI based on Whicket and the code is quite complex.

Tagflip consists of a Node.js backend (which can be deployed as a docker container, if you like) and a lightweight React frontend. 

## tagflip-common
This npm package contains the code shared between backend and frontend.
