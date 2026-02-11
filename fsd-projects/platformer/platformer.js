$(function () {
// initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(500, 650, 100, 100, "blue")
    createPlatform(600, 550, 100, 100, "green")
    createPlatform(800, 500, 100, 100, "green")
    createPlatform(900, 600, 100, 100, "blue")
    createPlatform(700, 700, 100, 100, "pink")
    createPlatform(700, 600, 100, 100, "pink")
    createPlatform(700, 300, 100, 100,"pink")
    createPlatform(900, 400, 100, 100, "green")
    createPlatform(1000, 300, 100, 100, "blue")
    createPlatform(1200, 700, 100, 100, "blue")
    createPlatform(1200, 600, 100, 100, "blue")
    createPlatform(1100, 700, 100, 100, "green")
    createPlatform(1100, 600, 100, 100, "green")
    createPlatform(1200, 500, 100, 100, "blue")
    createPlatform(1300, 700, 100, 100, "red")
    createPlatform(1300, 600, 100, 100, "red")
    createPlatform(1300, 500, 100, 100, "red")
    createPlatform(1300, 400, 100, 100, "red")
    createBadPlatform(400, 700, 100, 70, "red")
    createBadPlatform(1000, 700, 100, 100, "red")

    // TODO 3 - Create Collectables
    createCollectable("max", 730, 150, 0.5 , 0.5)
    createCollectable("steve", 920, 520, 0, 0)
    createCollectable("grace", 730, 530, 0, 0)


    
    // TODO 4 - Create Cannons
     createCannon("left", 500, 1000)
     createCannon("right", 350, 1000)
     createCannon("left", 300, 2000)
     

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
