import React, { createContext, useState, ReactNode, useContext } from 'react';
export type UserType = {
  title: string;
  url: string;
  dashboardUrl: string;
};
type PlanType = '249' | '549';
type LastActionType = 'initialPayment' | 'paymentRenew' | null;
type PaymentMethodType = 'stripe' | 'paypal' | 'google' | 'apple' | null;
type RoleType = 'athlete' | 'coach' | 'tutor' | null;
interface UserContextType {
  userType: UserType | null;
  setUserType: (type: UserType) => void;
  selectedPlan: PlanType | null;
  setSelectedPlan: (plan: PlanType) => void;
  lastAction: LastActionType;
  setLastAction: (action: LastActionType) => void;
  paymentMethod: PaymentMethodType;
  setPaymentMethod: (method: PaymentMethodType) => void;
  paymentAmount: string | null;
  setPaymentAmount: (amount: string) => void;
  receiptId: string | null;
  setReceiptId: (id: string) => void;
  role: RoleType;
  setRole: (role: RoleType) => void;
  hasCompletedOnboarding: boolean;
  setHasCompletedOnboarding: (val: boolean) => void;
}
const UserContext = createContext<UserContextType | undefined>(undefined);
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userType, setUserType] = useState<UserType | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<PlanType | null>(null);
  const [lastAction, setLastAction] = useState<LastActionType>(null);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethodType>(null);
  const [paymentAmount, setPaymentAmount] = useState<string | null>(null);
  const [receiptId, setReceiptId] = useState<string | null>(null);
  const [role, setRole] = useState<RoleType>(null);
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);

  return (
    <UserContext.Provider
      value={{
        userType,
        setUserType,
        selectedPlan,
        setSelectedPlan,
        lastAction,
        setLastAction,
        paymentMethod,
        setPaymentMethod,
        paymentAmount,
        setPaymentAmount,
        receiptId,
        setReceiptId,
        role,
        setRole,
        hasCompletedOnboarding,
        setHasCompletedOnboarding,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUser must be used within UserProvider');
  return context;
};
