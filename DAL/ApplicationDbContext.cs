using DAL.Entities;
using Microsoft.EntityFrameworkCore;

namespace DAL
{
    public class ApplicationDbContext : DbContext
    {
         public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
        { return DbContextOptions<ApplicationDbContext> options;}

        public DbSet<Value> Values { get; set; }
        public ApplicationDbContext(){}
    }
} 