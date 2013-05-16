  public var prefabObject2 : GameObject;
    private var clone2 : GameObject;
    
    
    function Update()
    {
    
    if(Input.GetKeyDown(KeyCode.R))
    {
    clone2 = Instantiate(prefabObject2, Vector3(Random.Range(-36,-39), Random.Range(2.6,2.6), Random.Range(-2.5,2.5)), Quaternion.identity);
    
    }
    }