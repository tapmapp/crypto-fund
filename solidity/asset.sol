contract Asset {
    
    address owner;

    struct Asset {
        bytes32 id;
        string name;
    }
    
    Asset[] assets;
    mapping(bytes32 => Asset) private assetsIds;
    
    constructor() public payable{
        owner = msg.sender;
    }
    
    modifier onlyOwner() {
      require(msg.sender == owner);
      _;
    }
    
    function addAsset(string _assetName) public payable onlyOwner returns(bool success) {
        
        bytes32 blockHash = blockhash(block.number - 1);
        bytes32 id = keccak256(abi.encodePacked(msg.sender, _assetName, blockHash));
        
        assets[id] = Asset({
            id: id,
            name: _assetName
        });
        
        return true;
        
    }
    
    function getAssets(uint[] indexes) public returns(bytes32[] assetIds, string[] assetsNames) {
        
        bytes32[] memory id = new bytes32[](indexes.length);
        string[] memory name = new string[](indexes.length);
        
        for (uint i = 0; i < indexes.length; i++) {
            Asset storage asset = assets[indexes[i]];
            id = asset.id;
            name = asset.name;
        }
        
        return (id, name);
        
    }
    
    function getAsset(bytes32 assetId) public returns(bytes32 id, string name) {
        Asset memory asset = assets[assetId];
        return (asset.id, asset.name);
    }
    
    function() external payable {}
   
}