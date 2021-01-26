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

        [BsonElement("title")] // The Title property is annotated with the [BsonElement] attribute. The attribute's value of 'title' represents the property title in the MongoDB collection.
        public string Title { get; set; }
        public string Description { get; set; }
        public string Date { get; set; }

    }
}
