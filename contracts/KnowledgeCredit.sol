pragma solidity ^0.4.17;

import 'zeppelin-solidity/contracts/token/ERC20/StandardToken.sol';

contract KnowledgeCredit is StandardToken {
  string public name = 'KnowledgeCredit';
  string public symbol = 'KCR';
  uint8 public decimals = 3;

  uint public INITIAL_SUPPLY = 20000000000;

  function KnowledgeCredit() public {
    totalSupply_ = 20000000000;
    balances[msg.sender] = 20000000000;
  }
}