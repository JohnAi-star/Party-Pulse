'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageCircle, Send } from 'lucide-react';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hi! I can help you find and book the perfect activity. What kind of experience are you looking for?',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, { role: 'user', content: userMessage }],
        }),
      });

      if (!response.ok) throw new Error('Failed to get response');

      const data = await response.json();
      setMessages((prev) => [...prev, { role: 'assistant', content: data.text }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Sorry, I encountered an error. Please try again.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <Button
        size="icon"
        className="fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => setIsOpen(true)}
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-4 right-4 w-80 sm:w-96 rounded-lg shadow-xl bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-200">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 border-b border-gray-300">
        <CardTitle className="text-lg font-semibold text-gray-700">Activity Assistant</CardTitle>
        <Button
          variant="ghost"
          size="sm"
          className="px-2 py-0 text-gray-600 hover:bg-transparent"
          onClick={() => setIsOpen(false)}
        >
          ×
        </Button>
      </CardHeader>
      <CardContent className="px-4 py-2">
        <ScrollArea className="h-[300px] overflow-y-auto pr-4">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === 'assistant' ? 'justify-start' : 'justify-end'
                }`}
              >
                <div
                  className={`rounded-lg px-4 py-2 max-w-[70%] text-sm ${
                    message.role === 'assistant'
                      ? 'bg-blue-200 text-gray-800'
                      : 'bg-blue-600 text-white'
                  }`}
                >
                  <p>{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="rounded-lg bg-gray-200 px-4 py-2 max-w-[70%] text-sm text-gray-600">
                  <p>Typing...</p>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter className="px-4 py-2 bg-gray-100 rounded-b-lg border-t border-gray-300">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
          />
          <Button
            type="submit"
            size="icon"
            disabled={isLoading}
            className="h-10 w-10 rounded-full bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Send className="h-4 w-4 text-white" />
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
