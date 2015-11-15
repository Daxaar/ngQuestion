﻿// Code generated by Microsoft (R) AutoRest Code Generator 0.9.7.0
// Changes may cause incorrect behavior and will be lost if the code is regenerated.

using System;
using System.Linq;
using Newtonsoft.Json.Linq;

namespace NgQuestion.WebApi.Tests.Models
{
    public partial class RegisterExternalBindingModel
    {
        private string _email;
        
        /// <summary>
        /// Required.
        /// </summary>
        public string Email
        {
            get { return this._email; }
            set { this._email = value; }
        }
        
        /// <summary>
        /// Initializes a new instance of the RegisterExternalBindingModel
        /// class.
        /// </summary>
        public RegisterExternalBindingModel()
        {
        }
        
        /// <summary>
        /// Initializes a new instance of the RegisterExternalBindingModel
        /// class with required arguments.
        /// </summary>
        public RegisterExternalBindingModel(string email)
            : this()
        {
            if (email == null)
            {
                throw new ArgumentNullException("email");
            }
            this.Email = email;
        }
        
        /// <summary>
        /// Serialize the object
        /// </summary>
        /// <returns>
        /// Returns the json model for the type RegisterExternalBindingModel
        /// </returns>
        public virtual JToken SerializeJson(JToken outputObject)
        {
            if (outputObject == null)
            {
                outputObject = new JObject();
            }
            if (this.Email == null)
            {
                throw new ArgumentNullException("Email");
            }
            if (this.Email != null)
            {
                outputObject["Email"] = this.Email;
            }
            return outputObject;
        }
    }
}
