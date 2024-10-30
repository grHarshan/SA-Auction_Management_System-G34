using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Auction_System.Models
{
    public class DbModel
    {
        [Key]
        public int cusId { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string CusName { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string PhoneNo { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string Email { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string Address { get; set; }
    }
}
