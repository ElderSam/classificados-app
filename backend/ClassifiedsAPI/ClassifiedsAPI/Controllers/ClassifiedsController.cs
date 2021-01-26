using ClassifiedsAPI.Models;
using ClassifiedsAPI.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

/*
 The preceding web API controller:

Uses the ClassifiedService class to perform CRUD operations.

Contains action methods to support GET, POST, PUT, and DELETE HTTP requests.

Calls CreatedAtRoute in the Create action method to return an HTTP 201 response.
Status code 201 is the standard response for an HTTP POST method that creates a new resource on the server.
CreatedAtRoute also adds a Location header to the response.
The Location header specifies the URI of the newly created book.
 */

namespace ClassifiedsAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClassifiedsController : ControllerBase
    {
        private readonly ClassifiedService _classifiedService;

        public ClassifiedsController(ClassifiedService classifiedService)
        {
            _classifiedService = classifiedService;
        }

        [HttpGet]
        public ActionResult<List<Classified>> Get() =>
            _classifiedService.Get();

        [HttpGet("{id:length(24)}", Name = "GetClassified")]
        public ActionResult<Classified> Get(string id)
        {
            var classified = _classifiedService.Get(id);

            if (classified == null)
            {
                return NotFound();
            }

            return classified;
        }

        [HttpPost]
        public ActionResult<Classified> Create(Classified classified)
        {
            _classifiedService.Create(classified);

            return CreatedAtRoute("GetClassified", new { id = classified.Id.ToString() }, classified);
        }

        [HttpPut("{id:length(24)}")]
        public IActionResult Update(string id, Classified classifiedIn)
        {
            var classified = _classifiedService.Get(id);

            if (classified == null)
            {
                return NotFound();
            }

            _classifiedService.Update(id, classifiedIn);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var classified = _classifiedService.Get(id);

            if (classified == null)
            {
                return NotFound();
            }

            _classifiedService.Remove(classified.Id);

            return NoContent();
        }
    }
}
