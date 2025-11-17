// Shared conference room storage
// This enables both create and verify endpoints to access the same rooms

interface StoredRoom {
  id: string;
  companyName: string;
  companyEmail: string;
  cfoEmail: string;
  accessCodeHash: string;
  codeGeneratedAt: string;
  status: 'ACTIVE' | 'PENDING' | 'CLOSED';
  createdAt: string;
  expiresAt: string;
  accessCodeSent: boolean;
}

// Global in-memory storage for conference rooms
// In production, this should be replaced with a database (Prisma/MongoDB/PostgreSQL)
const rooms = new Map<string, StoredRoom>();

export function addRoom(room: StoredRoom): void {
  rooms.set(room.id, room);
}

export function getRoom(roomId: string): StoredRoom | undefined {
  return rooms.get(roomId);
}

export function getAllRooms(): StoredRoom[] {
  return Array.from(rooms.values());
}

export function updateRoom(roomId: string, updates: Partial<StoredRoom>): StoredRoom | undefined {
  const room = rooms.get(roomId);
  if (!room) return undefined;
  
  const updatedRoom = { ...room, ...updates };
  rooms.set(roomId, updatedRoom);
  return updatedRoom;
}

export function deleteRoom(roomId: string): boolean {
  return rooms.delete(roomId);
}
