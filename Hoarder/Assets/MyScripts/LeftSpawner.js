    public var prefabObject1 : GameObject;
    private var clone1 : GameObject;
   
    
    function Update()
    {
    
    if(Input.GetKeyDown(KeyCode.W))
    {
    clone1 = Instantiate(prefabObject1, Vector3(Random.Range(36,39), Random.Range(2.6,2.6), Random.Range(-2.5,2.5)), Quaternion.identity);
    
    }
    }