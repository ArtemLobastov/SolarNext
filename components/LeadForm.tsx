'use client';
import React, { useState } from 'react';
import { Button } from './ui/button';
interface IFormData {
  name: string;
  email: string;
  is18: boolean;
  password: string;
  confirmPassword: string;
  errors: string[];
}

export default function LeadForm() {
  const [formData, setFormdata] = useState<IFormData>({
    name: '',
    email: '',
    is18: false,
    password: '',
    confirmPassword: '',
    errors: [],
  });
  const [isSubmiting, setIsSubmiting] = useState(false);
  const passwordMatch = formData.password === formData.confirmPassword;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmiting(true);
    // validate data
    if (!passwordMatch) {
      setFormdata({
        ...formData,
        errors: [...formData.errors, 'Passwords do not match'],
      });
      setIsSubmiting(false);
      return;
    }

    //TODO : send data to server
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(formData);
    setIsSubmiting(false);
  }
  return (
    <>
      <h1>LeadForm</h1>
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col justify-start items-start gap-y-3 py-3 bg-slate-200 mx-40 px-9"
      >
        {formData.errors.length > 0 && (
          <ul className="text-red-500">
            {formData.errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        )}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormdata({ ...formData, name: e.target.value })}
          className="w-full px-4 py-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={(e) => setFormdata({ ...formData, email: e.target.value })}
          className="w-full px-4 py-2 rounded"
          required
        />
        <div className="w-full flex gap-3 py-2">
          <input
            type="checkbox"
            name="is18"
            checked={formData.is18}
            onChange={(e) => setFormdata({ ...formData, is18: !formData.is18 })}
          />
          <label htmlFor="is18">Over 18</label>
        </div>
        <input
          type="password"
          placeholder="Password"
          required
          minLength={5}
          value={formData.password}
          onChange={(e) =>
            setFormdata({ ...formData, password: e.target.value })
          }
          className="w-full px-4 py-2 rounded"
        />
        {formData.confirmPassword.length > 4 && !passwordMatch && (
          <label className="text-red-500">must match</label>
        )}

        <input
          type="password"
          placeholder="Confirm password"
          required
          minLength={5}
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormdata({ ...formData, confirmPassword: e.target.value })
          }
          className="w-full px-4 py-2 rounded"
        />
        <Button
          type="submit"
          variant={'outline'}
          className="w-full py-2"
          disabled={isSubmiting}
        >
          Send nudes
        </Button>
      </form>
    </>
  );
}
