   
    
   
        var speed = 10.0f;
     
    function Update()
    {
    var movement = Vector3.zero;
     
    if (Input.GetKey("a"))
    movement.x--;
    if (Input.GetKey("d"))
    movement.x++;
     
    transform.Translate(movement * speed * Time.deltaTime, Space.Self);
    }