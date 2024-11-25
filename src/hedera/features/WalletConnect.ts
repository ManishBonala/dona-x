import {
  HederaSessionEvent,
  HederaJsonRpcMethod,
  DAppConnector,
  HederaChainId
} from "@hashgraph/hedera-wallet-connect";
import { LedgerId } from "@hashgraph/sdk";

const projectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID;
const metadata = {
  name: "DonaX",
  description: "DonaX is a platform for donating to charities.",
  url: "https://localhost:5173",
  icons: [""]
};

let dAppConnector: DAppConnector;

// Session handling function
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function handleNewSession(session: any): [string, string] | undefined {
  const sessionAccount = session.namespaces?.hedera?.accounts?.[0];
  const sessionParts = sessionAccount?.split(":");
  const accountId = sessionParts?.pop();
  const network = sessionParts?.pop();

  if (!accountId || !network) {
    return undefined;
  }

  localStorage.setItem("hederaAccountId", accountId);
  localStorage.setItem("hederaNetwork", network);
  console.log("sessionAccount is", accountId, network);
  return [accountId, network];
}

// Initialize and set up event listeners
async function initializeWalletConnect() {
  dAppConnector = new DAppConnector(
    metadata,
    LedgerId.TESTNET,
    projectId,
    Object.values(HederaJsonRpcMethod),
    [HederaSessionEvent.ChainChanged, HederaSessionEvent.AccountsChanged],
    [HederaChainId.Testnet]
  );
  await dAppConnector.init({ logger: "error" });

  dAppConnector.onSessionIframeCreated = (session) => {
    handleNewSession(session);
  };
}

// Connect wallet function
async function connectWallet() {
  console.log("Initializing wallet");
  await initializeWalletConnect();
  console.log("Wallet initialized");

  console.log("Connecting to wallet");

  const session = await dAppConnector.openModal();
  return handleNewSession(session);
}
export default connectWallet;
