import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-8 max-w-md w-full">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Excel Graph Shower 📊
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Intelligent data visualization platform powered by AI.
            Upload your Excel, PDF, or images and get instant insights.
          </p>
        </div>

        <div className="flex flex-col space-y-4">
          <Link href="/auth/login" className="w-full">
            <Button className="w-full text-lg py-6 bg-blue-600 hover:bg-blue-700">
              Get Started
            </Button>
          </Link>
          
          <Link href="/auth/register" className="w-full">
            <Button variant="outline" className="w-full text-lg py-6">
              Create Account
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
