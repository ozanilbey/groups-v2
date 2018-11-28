import axios from 'axios';
import {capitalize} from './client.js';

// API call function
function apiCall(method, args, callback, emitPostSignal){
  //Crate Axios instance
  var instance = axios.create({
    baseURL: window.GroupsConfig.host,
    timeout: 20000,
    headers: {
      'Content-Type': 'application/json'
    },
    maxRedirects: 3
  });
  // Create query string
  var _call = `/${method}?`;
  for(var key in args) {
    _call += key + '=' + encodeURI(args[key]) + '&';
  }
  _call += 'public_id=' + window.GroupsConfig.id;
  // Make the call
  instance.get(_call, {withCredentials: true})
    .then(function(response) {
      callback(response);
      // Execute "after" events
      if(emitPostSignal)
        window.Groups.events.emit("after" + capitalize(method), args);
    })
    .catch(function (error) {
      console.log(error);
    }
  );
}

const call = (method, args, callback, emitPostSignal = true) => {
  // Execute "before" events
  const beforeEventsExist = Object.keys(window.Groups.events.events).indexOf("before" + capitalize(method)) != -1;
  if(beforeEventsExist){
    window.Groups.events.emit("before" + capitalize(method), args, function(goToNextStep = true) {
      if(goToNextStep){
        apiCall(method, args, callback, emitPostSignal);
      }
    });
  } else {
    apiCall(method, args, callback, emitPostSignal);
  }
}

export default call;