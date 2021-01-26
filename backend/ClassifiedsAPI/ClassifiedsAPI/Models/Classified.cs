using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ClassifiedsAPI.Models
{
    public class Classified
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("title")] // The title property is annotated with the [BsonElement] attribute. The attribute's value of 'title' represents the property title in the MongoDB collection.
        public string title { get; set; }
        public string description { get; set; }
        public string date { get; set; }
    }
}
