using Microsoft.AspNetCore.Mvc;
using PeopleManage.Data;
using PeopleManage.Models;

namespace PeopleManage.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PeopleController : ControllerBase
    {

        private readonly AppDbContext _context;

        public PeopleController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Person>> GetPeople()
        {
            return _context.People.ToList();
        }

        [HttpGet("{id}")]
        public ActionResult<Person> GetPerson(int id)
        {
            var person = _context.People.Find(id);

            if(person == null)
            {
                return NotFound();
            }

            return person;
        }

        [HttpPost]
        public IActionResult CreatePerson(Person person)
        {
            _context.People.Add(person);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetPerson), new { id = person.Id }, person);
        }

        [HttpPut("{id}")]
        public IActionResult UpdatePerson(int id, Person person)
        {
            if (id != person.Id)
            {
                return BadRequest();
            }

            _context.Entry(person).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            _context.SaveChanges();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeletePerson(int id)
        {
            var person = _context.People.Find(id);

            if (person == null)
            {
                return NotFound();
            }

            _context.People.Remove(person);
            _context.SaveChanges();

            return NoContent();
        }
    }
}
