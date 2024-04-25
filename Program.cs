using Deshawns.Models;
using Deshawns.Models.DTOs;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

List<Dog> dogs = new List<Dog>
{
    new Dog
    {
        Id = 1,
        Name = "Sparky",
        WalkerId = 1, 
        CityId = 1
    },
    new Dog
    {
        Id = 2,
        Name = "Bella",
        CityId = 4
    },
    new Dog
    {
        Id = 3,
        Name = "Herp-derp",
        CityId = 3
    },
    new Dog
    {
        Id = 4,
        Name = "Bruh",
        CityId = 1
    },
    new Dog
    {
        Id = 5,
        Name = "Georgetown Raiders",
        WalkerId = 1, 
        CityId = 1
    },
    new Dog
    {
        Id = 6,
        Name = "Fork",
        CityId = 2
    },
    new Dog
    {
        Id = 7,
        Name = "Sock",
        CityId = 5
    },
    new Dog
    {
        Id = 8,
        Name = "Rita",
        CityId = 1
    },
};

List<Walker> walkers = new List<Walker>
{
    new Walker
    {
        Id = 1,
        Name = "Felicia Circumambulis",
        CityId = 1
    },
    new Walker
    {
        Id = 2,
        Name = "Bob Reegor",
        CityId = 3
    },
    new Walker
    {
        Id = 3,
        Name = "Lady Grace",
        CityId = 2
    },
    new Walker
    {
        Id = 4,
        Name = "The Sweeper",
        CityId = 2
    },
    new Walker
    {
        Id = 5,
        Name = "Smorgasbord Joe",
        CityId = 1
    },
    new Walker
    {
        Id = 6,
        Name = "Eve (pronounced `ev-eh`)",
        CityId = 4
    },
    new Walker
    {
        Id = 7,
        Name = "Unlucky Straightlinewalker",
        CityId = 5
    },
};

List<City> cities = new List<City>
{
    new City
    {
        Id = 1,
        Name = "Old Hickory"
    },
    new City
    {
        Id = 2,
        Name = "Belle Meade"
    },
    new City
    {
        Id = 3,
        Name = "Hendersonville"
    },
    new City
    {
        Id = 4,
        Name = "Hermitage"
    },
    new City
    {
        Id = 5,
        Name = "The Nations"
    },
};

List<WalkerCity> walkerCities = new List<WalkerCity>
{
    new WalkerCity
    {
        Id = 1,
        WalkerId = 1,
        CityId = 1,
    },
    new WalkerCity
    {
        Id = 2,
        WalkerId = 2,
        CityId = 3,
    },
    new WalkerCity
    {
        Id = 3,
        WalkerId = 3,
        CityId = 2,
    },
    new WalkerCity
    {
        Id = 4,
        WalkerId = 4,
        CityId = 2,
    },
    new WalkerCity
    {
        Id = 5,
        WalkerId = 5,
        CityId = 1,
    },
    new WalkerCity
    {
        Id = 6,
        WalkerId = 6,
        CityId = 4,
    },
    new WalkerCity
    {
        Id = 7,
        WalkerId = 7,
        CityId = 5,
    },
};

app.MapGet("/api/hello", () =>
{
    return new { Message = "Welcome to DeShawn's Dog Walking" };
});

app.MapGet("/api/dogs", () =>
{
    return dogs.Select(d => new DogDTO
    {
        Id = d.Id,
        Name = d.Name,
        WalkerId = d.WalkerId,
        CityId = d.CityId
    });
});

app.MapGet("/api/dogs/{id}", (int id) =>
{
    Dog dog = dogs.FirstOrDefault(d => d.Id == id);

    return dogs.Select(d => new DogDTO
    {
        Id = d.Id,
        Name = d.Name,
        WalkerId = d.WalkerId,
        CityId = d.CityId
    });
});

app.MapGet("/api/walkers/{id}", (int id) =>
{
    Walker walker = walkers.FirstOrDefault(w => w.Id == id);

    return
    new WalkerDTO
    {
        Id = walker.Id,
        Name = walker.Name,
        CityId = walker.CityId
    };
});

app.MapPost("/api/dogs", (Dog dog) =>
{
    dog.Id = dogs.Count > 0 ? dogs.Max(huh => huh.Id) + 1 : 1;
    dogs.Add(dog);

    return Results.Created($"/dogs/{dog.Id}", new DogDTO
    {
        Id = dog.Id,
        Name = dog.Name,
        WalkerId = dog.WalkerId,
        CityId = dog.CityId
    });
});

app.MapGet("/api/walkers", () =>
{
    return walkers.Select(w => new WalkerDTO
    {
        Id = w.Id,
        Name = w.Name,
        CityId = w.CityId
    });
});

app.MapGet("/api/cities", () => 
{
    return cities.Select(c => new CityDTO
    {
        Id = c.Id,
        Name = c.Name
    });
});

app.MapPost("/api/dogs/updateWalker", (DogWalkerUpdateDTO DogWalkerUpdate) =>
{
    Dog dog = dogs.FirstOrDefault(d => d.Id == DogWalkerUpdate.dogsId);
    dog.WalkerId = DogWalkerUpdate.walkersId;

    return Results.Created($"/dogs/{dog.Id}", new DogDTO
    {
        Id = dog.Id,
        Name = dog.Name,
        WalkerId = dog.WalkerId,
        CityId = dog.CityId
    });
});

app.MapPost("/api/cities", (City city) =>
{
    city.Id = cities.Count > 0 ? cities.Max(huh => huh.Id) + 1 : 1;
    cities.Add(city);

    return Results.Created("/cites", new CityDTO
    {
        Id = city.Id,
        Name = city.Name
    });
});

app.Run();