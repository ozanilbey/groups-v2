/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([1,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var riot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var riot__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(riot__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var riot_hot_reload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var riot_hot_reload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(riot_hot_reload__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_temp_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _styles_temp_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_temp_less__WEBPACK_IMPORTED_MODULE_2__);
// Riot



console.log('works');
/*

// Riot
import riot from 'riot';
import 'riot-hot-reload';

// Tags
import './tags/overlay.tag';
import './tags/alert.tag';
import './tags/auth.tag';
import './tags/auth-state.tag';
import './tags/auth-login.tag';
import './tags/auth-register.tag';
import './tags/auth-reset.tag';
import './tags/star-button.tag';
import './tags/star-list.tag';
import './tags/blog.tag';
import './tags/blog-list.tag';
import './tags/blog-post.tag';
import './tags/blog-composer.tag';
import './tags/comments.tag';
import './tags/forum.tag';
import './tags/forum-list.tag';
import './tags/forum-thread.tag';
import './tags/forum-composer.tag';
import './tags/group.tag';
import './tags/group-card.tag';
import './tags/group-creator.tag';
import './tags/group-header.tag';
import './tags/group-activity.tag';
import './tags/group-members.tag';
import './tags/group-settings.tag';

import './tags/messages.tag';
import './tags/messages-composer.tag';
import './tags/profile.tag';
import './tags/profile-card.tag';
import './tags/profile-header.tag';
import './tags/profile-activity.tag';
import './tags/profile-followers.tag';
import './tags/profile-following.tag';
import './tags/profile-groups.tag';
import './tags/profile-settings.tag';

import './tags/feedback.tag';
// import './tags/list.tag';
import './tags/group-list.tag';
import './tags/profile-list.tag';
import './tags/private-content.tag';

// Styles
import './styles/common.less';

// The only init-level script
import './scripts/tokenLogin.js';

// Color
import renderColor from './scripts/renderColor.js';

import NanoEvents from 'nanoevents';


// Init
const init = function(id, settings) {
	let host = settings ? settings.host : undefined;
	let theme = settings ? settings.theme : undefined;
	let color = settings ? settings.color : undefined;
	let token = settings ? settings.token : undefined;
	window.GraphJSConfig = {};
	window.GraphJSConfig['id'] = id;
	window.GraphJSConfig['host'] = host || 'https://build.phonetworks.com';
	window.GraphJSConfig['theme'] = theme || 'light';
	window.GraphJSConfig['color'] = color || '#6f879f';
	document.body.className = document.body.className.replace(/\bgraphjs-theme\S+/ig, '');
	document.body.classList.add('graphjs-theme-' + window.GraphJSConfig['theme']);
	renderColor(window.GraphJSConfig['color']);
	if(token) {
		tokenLogin(token, function() {
			console.log("logged in via token");
			riot.mount('*');
		});
		return;
	}
	riot.mount('*');
}

// Activity
import getActivityToken from './scripts/getActivityToken.js';

// Authentication
import getSession from './scripts/getSession.js';
import getUser from './scripts/getUser.js';
import login from './scripts/login.js';
import logout from './scripts/logout.js';
import register from './scripts/register.js';
import reset from './scripts/reset.js';
import verify from './scripts/verify.js';

// Blog
import commentBlogPost from './scripts/commentBlogPost.js';
import editBlogPost from './scripts/editBlogPost.js';
import editBlogComment from './scripts/editBlogComment.js';
import getBlogPost from './scripts/getBlogPost.js';
import getBlogPosts from './scripts/getBlogPosts.js';
import publishBlogPost from './scripts/publishBlogPost.js';
import removeBlogPost from './scripts/removeBlogPost.js';
import removeBlogComment from './scripts/removeBlogComment.js';
import startBlogPost from './scripts/startBlogPost.js';
import unpublishBlogPost from './scripts/unpublishBlogPost.js';

// Comments
import addComment from './scripts/addComment.js';
import getComments from './scripts/getComments.js';
import removeComment from './scripts/removeComment.js';

// Forum
import getThread from './scripts/getThread.js';
import getThreads from './scripts/getThreads.js';
import removeReply from './scripts/removeReply.js';
import replyThread from './scripts/replyThread.js';
import startThread from './scripts/startThread.js';

// Groups
import createGroup from './scripts/createGroup.js';
import getGroup from './scripts/getGroup.js';
import joinGroup from './scripts/joinGroup.js';
import leaveGroup from './scripts/leaveGroup.js';
import listGroups from './scripts/listGroups.js';
import listMembers from './scripts/listMembers.js';
import setGroupCover from './scripts/setGroupCover.js';
import setGroupDescription from './scripts/setGroupDescription.js';
import setGroupTitle from './scripts/setGroupTitle.js';

// Members
import follow from './scripts/follow.js';
import getFollowers from './scripts/getFollowers.js';
import getFollowing from './scripts/getFollowing.js';
import getMembers from './scripts/getMembers.js';
import unfollow from './scripts/unfollow.js';

// Messages
import countUnreadMessages from './scripts/countUnreadMessages.js';
import getConversation from './scripts/getConversation.js';
import getConversations from './scripts/getConversations.js';
import getInbox from './scripts/getInbox.js';
import getMessage from './scripts/getMessage.js';
import getOutbox from './scripts/getOutbox.js';
import sendAnonymousMessage from './scripts/sendAnonymousMessage.js';
import sendMessage from './scripts/sendMessage.js';

// Profile
import getProfile from './scripts/getProfile.js';
import listMemberships from './scripts/listMemberships.js';
import setAvatar from './scripts/setAvatar.js';
import setBio from './scripts/setBio.js';
import setBirthday from './scripts/setBirthday.js';
import setEmail from './scripts/setEmail.js';
import setPassword from './scripts/setPassword.js';
import setProfile from './scripts/setProfile.js';
import setUsername from './scripts/setUsername.js';

// Show
import showAlert from './scripts/showAlert.js';
import showAuth from './scripts/showAuth.js';
import showLogin from './scripts/showLogin.js';
import showRegister from './scripts/showRegister.js';
import showReset from './scripts/showReset.js';
import showBlog from './scripts/showBlog.js';
import showBlogComposer from './scripts/showBlogComposer.js';
import showBlogList from './scripts/showBlogList.js';
import showBlogPost from './scripts/showBlogPost.js';
import showComments from './scripts/showComments.js';
import showForum from './scripts/showForum.js';
import showForumComposer from './scripts/showForumComposer.js';
import showForumList from './scripts/showForumList.js';
import showForumThread from './scripts/showForumThread.js';
import showGroup from './scripts/showGroup.js';
import showGroupCreator from './scripts/showGroupCreator.js';
import showMessages from './scripts/showMessages.js';
import showMessagesComposer from './scripts/showMessagesComposer.js';
import showOverlay from './scripts/showOverlay.js';
import showProfile from './scripts/showProfile.js';

// Star
import star from './scripts/star.js';
import getStar from './scripts/getStar.js';
import getStars from './scripts/getStars.js';
import getUserStars from './scripts/getUserStars.js';
import removeStar from './scripts/removeStar.js';

import getPrivateContent from './scripts/getPrivateContent.js';
import removePrivateContent from './scripts/removePrivateContent.js';
import editPrivateContent from './scripts/editPrivateContent.js';
import addPrivateContent from './scripts/addPrivateContent.js';

// Stripe
import createSubscription from './scripts/createSubscription.js';
import checkSubscription from './scripts/checkSubscription.js';
import tokenLogin from './scripts/tokenLogin.js';

window.GraphJS = {
	init,
	getActivityToken, // Activity
	getSession, getUser, login, logout, register, reset, verify, // Authentication
	editBlogPost, editBlogComment, getBlogPost, getBlogPosts, removeBlogPost, removeBlogComment, commentBlogPost, startBlogPost, // Blog
	addComment, getComments, removeComment, //Comments
	getThread, getThreads, removeReply, replyThread, startThread, // Forum
	createGroup, getGroup, joinGroup, leaveGroup, listGroups, listMembers, setGroupCover, setGroupDescription, setGroupTitle, // Groups
	follow, getMembers, getFollowers, getFollowing, unfollow, // Members
	countUnreadMessages, getConversation, getConversations, getInbox, getMessage, getOutbox, sendAnonymousMessage, sendMessage, // Messages
	getProfile, listMemberships, setAvatar, setBio, setBirthday, setEmail, setPassword, setProfile, setUsername, // Profile
	showAlert, showAuth, showLogin, showRegister, showReset, showBlog, showBlogComposer, showBlogList, showBlogPost, showComments, showForum, showForumComposer, showForumList, showForumThread, showGroup, showGroupCreator, showMessagesComposer, showMessages, showOverlay, showProfile, // Show
	star, getStar, getStars, getUserStars, removeStar, // Star
	getPrivateContent, addPrivateContent, removePrivateContent, editPrivateContent,
	checkSubscription, createSubscription // Stripe
};

window.GraphJS.events = new NanoEvents();
window.GraphJS.on = function(hook, callback) {
	window.GraphJS.events.on(hook, callback);
}

*/

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports, __webpack_require__(0)) :
	undefined;
}(this, (function (exports,riot) { 'use strict';

var nonState = 'isMounted opts'.split(' ');

function reload(name) {
  riot.util.styleManager.inject();

  var elems = document.querySelectorAll((name + ", [data-is=" + name + "]"));
  var tags = [];

  for (var i = 0; i < elems.length; i++) {
    var el = elems[i], oldTag = el._tag, v;
    reload.trigger('before-unmount', oldTag);
    oldTag.unmount(true); // detach the old tag

    // reset the innerHTML and attributes to how they were before mount
    el.innerHTML = oldTag.__.innerHTML;
    (oldTag.__.instAttrs || []).map(function(attr) {
      el.setAttribute(attr.name, attr.value);
    });

    // copy options for creating the new tag
    var newOpts = {};
    for(key in oldTag.opts) {
      newOpts[key] = oldTag.opts[key];
    }
    newOpts.parent = oldTag.parent;

    // create the new tag
    reload.trigger('before-mount', newOpts, oldTag);
    var newTag = riot.mount(el, newOpts)[0];

    // copy state from the old to new tag
    for(var key in oldTag) {
      v = oldTag[key];
      if (~nonState.indexOf(key)) { continue }
      newTag[key] = v;
    }
    newTag.update();
    tags.push(newTag);
    reload.trigger('after-mount', newTag, oldTag);
  }

  return tags
}

riot.observable(reload);
riot.reload = reload;
if (riot.default) { riot.default.reload = reload; }

exports.reload = reload;
exports['default'] = reload;

Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
/******/ ]);