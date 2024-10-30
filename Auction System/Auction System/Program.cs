using Auction_System.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

// Configure DbContext with SQL Server
builder.Services.AddDbContext<VehicleModel>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DevConnection")));

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowMultipleOrigins", //3001 port means server runing port
        builder => builder.WithOrigins("http://localhost:3002", "http://localhost:5067") //When run the react app change this 5174 code
                          .AllowAnyHeader()
                          .AllowAnyMethod());
});
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseHttpsRedirection();

app.UseRouting();

// Apply the merged CORS policy
app.UseCors("AllowMultipleOrigins");

app.UseAuthorization();

app.MapControllers();

app.Run();
