using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Auction_System.Models;

namespace Auction_System.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DbModelController : ControllerBase
    {
        private readonly VehicleModel _context;

        public DbModelController(VehicleModel context)
        {
            _context = context;
        }

        // GET: api/DbModel
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DbModel>>> GetVehicles()
        {
            return await _context.Vehicles.ToListAsync();
        }

        // GET: api/DbModel/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DbModel>> GetDbModel(int id)
        {
            var dbModel = await _context.Vehicles.FindAsync(id);

            if (dbModel == null)
            {
                return NotFound();
            }

            return dbModel;
        }

        // PUT: api/DbModel/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDbModel(int id, DbModel dbModel)
        {
            dbModel.cusId = id;

            _context.Entry(dbModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DbModelExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/DbModel
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<DbModel>> PostDbModel(DbModel dbModel)
        {
            _context.Vehicles.Add(dbModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDbModel", new { id = dbModel.cusId }, dbModel);
        }

        // DELETE: api/DbModel/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDbModel(int id)
        {
            var dbModel = await _context.Vehicles.FindAsync(id);
            if (dbModel == null)
            {
                return NotFound();
            }

            _context.Vehicles.Remove(dbModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DbModelExists(int id)
        {
            return _context.Vehicles.Any(e => e.cusId == id);
        }
    }
}
