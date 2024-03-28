namespace PeopleManage.Models
{
    public class Person
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string FirstName { get; set; }
        public string Surname { get; set; }
        public string Sex { get; set; }
        public DateTime DateOfBirth { get; set; }
        public int Age { get; set; }

    }
}
