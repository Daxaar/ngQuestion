﻿// Code generated by Microsoft (R) AutoRest Code Generator 0.9.7.0
// Changes may cause incorrect behavior and will be lost if the code is regenerated.

using System.Collections.Generic;
using Microsoft.Rest;
using Newtonsoft.Json.Linq;

namespace NgQuestion.WebApi.Tests.Models
{
    public partial class Question
    {
        private string _answer;
        
        /// <summary>
        /// Optional.
        /// </summary>
        public string Answer
        {
            get { return this._answer; }
            set { this._answer = value; }
        }
        
        private IList<string> _answers;
        
        /// <summary>
        /// Optional.
        /// </summary>
        public IList<string> Answers
        {
            get { return this._answers; }
            set { this._answers = value; }
        }
        
        private int? _id;
        
        /// <summary>
        /// Optional.
        /// </summary>
        public int? Id
        {
            get { return this._id; }
            set { this._id = value; }
        }
        
        private int? _order;
        
        /// <summary>
        /// Optional.
        /// </summary>
        public int? Order
        {
            get { return this._order; }
            set { this._order = value; }
        }
        
        private string _text;
        
        /// <summary>
        /// Optional.
        /// </summary>
        public string Text
        {
            get { return this._text; }
            set { this._text = value; }
        }
        
        /// <summary>
        /// Initializes a new instance of the Question class.
        /// </summary>
        public Question()
        {
            this.Answers = new LazyList<string>();
        }
        
        /// <summary>
        /// Deserialize the object
        /// </summary>
        public virtual void DeserializeJson(JToken inputObject)
        {
            if (inputObject != null && inputObject.Type != JTokenType.Null)
            {
                JToken answerValue = inputObject["Answer"];
                if (answerValue != null && answerValue.Type != JTokenType.Null)
                {
                    this.Answer = ((string)answerValue);
                }
                JToken answersSequence = ((JToken)inputObject["Answers"]);
                if (answersSequence != null && answersSequence.Type != JTokenType.Null)
                {
                    foreach (JToken answersValue in ((JArray)answersSequence))
                    {
                        this.Answers.Add(((string)answersValue));
                    }
                }
                JToken idValue = inputObject["Id"];
                if (idValue != null && idValue.Type != JTokenType.Null)
                {
                    this.Id = ((int)idValue);
                }
                JToken orderValue = inputObject["Order"];
                if (orderValue != null && orderValue.Type != JTokenType.Null)
                {
                    this.Order = ((int)orderValue);
                }
                JToken textValue = inputObject["Text"];
                if (textValue != null && textValue.Type != JTokenType.Null)
                {
                    this.Text = ((string)textValue);
                }
            }
        }
        
        /// <summary>
        /// Serialize the object
        /// </summary>
        /// <returns>
        /// Returns the json model for the type Question
        /// </returns>
        public virtual JToken SerializeJson(JToken outputObject)
        {
            if (outputObject == null)
            {
                outputObject = new JObject();
            }
            if (this.Answer != null)
            {
                outputObject["Answer"] = this.Answer;
            }
            JArray answersSequence = null;
            if (this.Answers != null)
            {
                if (this.Answers is ILazyCollection<string> == false || ((ILazyCollection<string>)this.Answers).IsInitialized)
                {
                    answersSequence = new JArray();
                    outputObject["Answers"] = answersSequence;
                    foreach (string answersItem in this.Answers)
                    {
                        if (answersItem != null)
                        {
                            answersSequence.Add(answersItem);
                        }
                    }
                }
            }
            if (this.Id != null)
            {
                outputObject["Id"] = this.Id.Value;
            }
            if (this.Order != null)
            {
                outputObject["Order"] = this.Order.Value;
            }
            if (this.Text != null)
            {
                outputObject["Text"] = this.Text;
            }
            return outputObject;
        }
    }
}