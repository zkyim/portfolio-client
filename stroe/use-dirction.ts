"use client";
import { create } from "zustand";

interface directionProps {
  isDirectionLtr: boolean;
  onLTR: () => void;
  onRTL: () => void; 
}

export const useDirection =  create<directionProps>(set => ({
    isDirectionLtr: true,
    onLTR: () => set({ isDirectionLtr: true }),
    onRTL: () => set({ isDirectionLtr: false }),
}));