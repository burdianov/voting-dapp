import * as anchor from '@coral-xyz/anchor';
import { Program } from '@coral-xyz/anchor';
import { Keypair, PublicKey } from '@solana/web3.js';
import { BankrunProvider, startAnchor } from 'anchor-bankrun';

const IDL = require('../target/idl/voting.json');
import { Voting } from 'anchor/target/types/voting';

const votingAddress = new PublicKey('coUnmi3oBUtwtd9fjeAvSsJssXh5A5xyPbhpewyzRVF');

describe('voting', () => {
  it('Initialize Poll', async () => {
    const context = startAnchor("", [], []);
    const provider = new BankrunProvider(context);
  });
});
