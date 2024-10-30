using Microsoft.EntityFrameworkCore;

namespace Auction_System.Models
{
    public class VehicleModel : DbContext
    {
        public VehicleModel(DbContextOptions<VehicleModel> options) : base(options)
        { 
        }
        public DbSet<DbModel> Vehicles { get; set; }
    }
}
