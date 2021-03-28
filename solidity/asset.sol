pragma solidity 0.7.4;
pragma experimental ABIEncoderV2;

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
    
    function addAsset(string calldata _assetName) public payable onlyOwner returns(bool success) {
        
        bytes32 blockHash = blockhash(block.number - 1);
        bytes32 id = keccak256(abi.encodePacked(msg.sender, _assetName, blockHash));
        
        assetsIds[id] = Asset({
            id: id,
            name: _assetName
        });
        
        return true;
        
    }
    
    function getAssets(uint[] memory indexes) public returns(bytes32[] memory assetIds, string[] memory assetsNames) {
        
        bytes32[] memory id = new bytes32[](indexes.length);
        string[] memory name = new string[](indexes.length);
        
        for (uint i = 0; i < assets.length; i++) {
            id[i] = assets[i].id;
            name[i] = assets[i].name;
        }
        
        return (id, name);
        
    }
    
    function getAsset(bytes32 assetId) public returns(bytes32 id, string memory name) {
        Asset memory asset = assetsIds[assetId];
        return (asset.id, asset.name);
    }
    
    receive() external payable {}
   
}