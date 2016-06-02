var method = require('./method');

exports.index = function(req, res){
  	method.renderPjax(req, res, {pjaxTpl: 'tpl/index.ejs', tpl: 'index'});
};

exports.about = function(req, res){
  	method.renderPjax(req, res, {pjaxTpl: 'tpl/about.ejs', tpl: 'about'});
};

exports.blog = function(req, res){
  	method.renderPjax(req, res, {pjaxTpl: 'tpl/blog.ejs', tpl: 'blog'});
};

exports.contact = function(req, res){
  	method.renderPjax(req, res, {pjaxTpl: 'tpl/contact.ejs', tpl: 'contact'});
};

exports.element = function(req, res){
  	method.renderPjax(req, res, {pjaxTpl: 'tpl/element.ejs', tpl: 'element'});
};

exports.portfolio = function(req, res){
  	method.renderPjax(req, res, {pjaxTpl: 'tpl/portfolio.ejs', tpl: 'portfolio'});
};

exports.service = function(req, res){
  	method.renderPjax(req, res, {pjaxTpl: 'tpl/service.ejs', tpl: 'service'});
};

exports.single = function(req, res){
  	method.renderPjax(req, res, {pjaxTpl: 'tpl/single.ejs', tpl: 'single'});
};