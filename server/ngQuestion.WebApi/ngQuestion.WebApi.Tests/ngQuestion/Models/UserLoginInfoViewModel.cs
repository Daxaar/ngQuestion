﻿// Code generated by Microsoft (R) AutoRest Code Generator 0.9.7.0
// Changes may cause incorrect behavior and will be lost if the code is regenerated.

using System;
using System.Linq;
using Newtonsoft.Json.Linq;

namespace NgQuestion.WebApi.Tests.Models
{
    public partial class UserLoginInfoViewModel
    {
        private string _loginProvider;
        
        /// <summary>
        /// Optional.
        /// </summary>
        public string LoginProvider
        {
            get { return this._loginProvider; }
            set { this._loginProvider = value; }
        }
        
        private string _providerKey;
        
        /// <summary>
        /// Optional.
        /// </summary>
        public string ProviderKey
        {
            get { return this._providerKey; }
            set { this._providerKey = value; }
        }
        
        /// <summary>
        /// Initializes a new instance of the UserLoginInfoViewModel class.
        /// </summary>
        public UserLoginInfoViewModel()
        {
        }
        
        /// <summary>
        /// Deserialize the object
        /// </summary>
        public virtual void DeserializeJson(JToken inputObject)
        {
            if (inputObject != null && inputObject.Type != JTokenType.Null)
            {
                JToken loginProviderValue = inputObject["LoginProvider"];
                if (loginProviderValue != null && loginProviderValue.Type != JTokenType.Null)
                {
                    this.LoginProvider = ((string)loginProviderValue);
                }
                JToken providerKeyValue = inputObject["ProviderKey"];
                if (providerKeyValue != null && providerKeyValue.Type != JTokenType.Null)
                {
                    this.ProviderKey = ((string)providerKeyValue);
                }
            }
        }
    }
}
