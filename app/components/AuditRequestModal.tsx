'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface AuditRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuditRequestModal({ isOpen, onClose }: AuditRequestModalProps) {
  const [formData, setFormData] = useState({
    companyName: '',
    personalName: '',
    email: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch('/api/audit/request-portal-link', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          companyName: formData.companyName,
          personalName: formData.personalName,
          email: formData.email,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to request portal link');
      }

      setSuccess(true);
      setFormData({
        companyName: '',
        personalName: '',
        email: '',
      });

      setTimeout(() => {
        onClose();
        setSuccess(false);
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDialogOpenChange = (open: boolean) => {
    if (!open) {
      onClose();
      setError(null);
      setSuccess(false);
      setFormData({
        companyName: '',
        personalName: '',
        email: '',
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleDialogOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Get Started with Your Payroll Audit</DialogTitle>
          <DialogDescription>
            Enter your information and we'll send you a secure portal link.
          </DialogDescription>
        </DialogHeader>

        {success ? (
          <div className="flex flex-col items-center justify-center py-6 space-y-4">
            <div className="text-5xl">✅</div>
            <div className="text-center space-y-2">
              <h3 className="font-semibold text-lg">Portal Link Sent!</h3>
              <p className="text-sm text-gray-600">
                Check your email for the secure portal link.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="companyName">Company Name *</Label>
              <Input
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Your company name"
                required
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="personalName">Your Name *</Label>
              <Input
                id="personalName"
                name="personalName"
                value={formData.personalName}
                onChange={handleChange}
                placeholder="Your full name"
                required
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                disabled={isLoading}
              />
            </div>

            {error && (
              <div className="flex gap-2 p-3 bg-red-50 border border-red-200 rounded-md">
                <span className="text-2xl flex-shrink-0">⚠️</span>
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700"
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send Portal Link'}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
