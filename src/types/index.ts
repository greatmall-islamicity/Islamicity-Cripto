export type Language = 'id' | 'en' | 'ar';

export type CampaignCategory = 
  | 'zakat_fitrah' 
  | 'zakat_maal' 
  | 'zakat_profesi' 
  | 'waqf_produktif' 
  | 'waqf_sosial' 
  | 'infak_kemanusiaan';

export type AsnafType = 
  | 'fakir' 
  | 'miskin' 
  | 'amil' 
  | 'muallaf' 
  | 'riqab' 
  | 'gharimin' 
  | 'fisabilillah' 
  | 'ibnu_sabil';

export interface Campaign {
  id: string;
  title: string;
  titleEn: string;
  titleAr: string;
  category: CampaignCategory;
  description: string;
  descriptionEn: string;
  targetAmount: number; // in IDR
  targetCrypto: string; // e.g. "50,000 USDT"
  raisedAmount: number;
  distributedAmount: number;
  beneficiaryCount: number;
  asnafCategory: AsnafType;
  image: string;
  location: string;
  verificationStatus: 'verified' | 'audited' | 'pending';
  biometricVerifiedCount: number;
  smartContractAddress: string;
  e2eEncrypted: boolean;
  recentDisbursements: DisbursementRecord[];
}

export interface DisbursementRecord {
  id: string;
  title: string;
  amount: number;
  date: string;
  beneficiaryCount: number;
  biometricAuditId: string;
  proofHash: string;
  status: 'completed' | 'in_transit' | 'scheduled';
}

export interface BlockchainTransaction {
  txHash: string;
  blockNumber: number;
  timestamp: string;
  type: 'ZAKAT' | 'WAKAF' | 'DISBURSEMENT';
  donorMasked: string; // e.g., "Hamba Allah (0x7F2...9a)"
  beneficiaryMasked?: string;
  amountIdr: number;
  amountCrypto: string;
  currency: 'IDR' | 'USDT' | 'ISLM' | 'ETH' | 'PAXG';
  paymentGateway: 'E-Wallet' | 'Crypto' | 'Virtual Account' | 'QRIS';
  smartContract: string;
  zkProofHash: string;
  biometricVerified: boolean;
  status: 'confirmed' | 'pending';
}

export interface BlockchainBlock {
  blockNumber: number;
  timestamp: string;
  hash: string;
  prevHash: string;
  merkleRoot: string;
  txCount: number;
  validator: string;
  transactions: BlockchainTransaction[];
}

export interface Beneficiary {
  id: string;
  fullNameMasked: string;
  asnaf: AsnafType;
  city: string;
  biometricStatus: 'verified' | 'pending';
  biometricScore: number;
  verificationMethod: 'FaceBiometric' | 'WebAuthnPasskey' | 'NID_Card';
  totalAidReceivedIdr: number;
  lastAidDate: string;
  zkIdentityProof: string;
}

export interface NotificationItem {
  id: string;
  type: 'distribution' | 'donation' | 'biometric' | 'security';
  title: string;
  message: string;
  timestamp: string;
  txHash?: string;
  read: boolean;
}

export interface AccessibilitySettings {
  voiceNavActive: boolean;
  screenReaderActive: boolean;
  speechRate: number;
  contrastMode: 'normal' | 'high-contrast' | 'sepia' | 'dark';
  fontSize: 'sm' | 'md' | 'lg' | 'xl';
  soundEffects: boolean;
}

export interface FraudAnalysisResult {
  id: string;
  campaignId: string;
  campaignTitle: string;
  riskScore: number; // 0 - 100
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH';
  anomaliesDetected: string[];
  recommendation: string;
  evaluatedAt: string;
  verifiedByAi: boolean;
}

export interface SmartContractAuditLog {
  id: string;
  timestamp: string;
  contractName: string;
  contractAddress: string;
  methodCalled: string;
  eventEmitted: string;
  caller: string;
  invariantStatus: 'VERIFIED' | 'COMPLIANT' | 'PROTECTED';
  invariantNote: string;
  gasUsed: number;
  blockNumber: number;
  auditorSignature: string;
  decodedParams: { key: string; value: string }[];
}

export interface ContractSecurityAlert {
  id: string;
  timestamp: string;
  blockNumber: number;
  severity: 'CRITICAL' | 'WARNING' | 'NOTICE';
  title: string;
  message: string;
  contractName: string;
  contractAddress: string;
  category: 'SUSPICIOUS_VELOCITY' | 'INVARIANT_CIRCUIT_BREAKER' | 'TIMELOCK_UPGRADE' | 'DUPLICATE_CLAIM_ATTEMPT' | 'AMIL_FEE_OVERRUN';
  actionSuggested: string;
  read: boolean;
  resolved: boolean;
}


