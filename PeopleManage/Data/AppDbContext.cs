using Microsoft.EntityFrameworkCore;
using PeopleManage.Models;

namespace PeopleManage.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
        
        public DbSet<Person> People { get; set; }
    }
}
