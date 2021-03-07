pragma solidity 0.4.24;
pragma experimental ABIEncoderV2;

import './asset.sol';

contract Client {
    
    address owner;
    
    struct Client {
        address addr;
        Asset[] assets;
    }
    
    Client[] clients;
    mapping(address => Client) public clientAddresses;
    
    constructor() public {
        owner = msg.sender;
    }
    
    modifier onlyOwner() {
      require(msg.sender == owner);
      _;
    }
    
    function addClient(address _addr) public payable returns(bool success) {
        
        bytes32 blockHash = blockhash(block.number - 1);
        bytes32 id = keccak256(abi.encodePacked(msg.sender, _addr, blockHash));
        
        Asset[] _assets;
        Client memory client;
        
        client = Client({
            addr: _addr,
            assets: _assets
        });
        clients.push(client);
        return true;
        
    }
    
    function getClients(uint[] indexes) public returns (address[], Asset[][]) {

        address[] memory addrs = new address[](indexes.length);
        Asset[][] memory clientAssets = new Asset[][](indexes.length);
        
        for (uint i = 0; i < indexes.length; i++) {
            Client storage client = clients[indexes[i]];
            addrs[i] = client.addr;
            clientAssets[i] = client.assets; 
        }
        
        return (addrs, clientAssets);
        
    }
    
    function getClient(address _addr) public returns(address addr, Asset[]) {
        // copy the data into memory
        Client memory client = clientAddresses[_addr];
        
        // break the struct's members out into a tuple
        // in the same order that they appear in the struct
        return (client.addr, client.assets);
    }
}