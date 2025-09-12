# Portfolio Backend Integration Contracts

## Overview

This document outlines the API contracts and integration plan for Sachin Kumar's portfolio website backend development.

## Current Status

- **Frontend**: Complete with mock data
- **Backend**: Basic FastAPI server running with sample endpoints
- **Database**: MongoDB configured and ready

## Backend Development Plan

### 1. Contact Form API

**Endpoint**: `POST /api/contact`

**Purpose**: Handle contact form submissions and store inquiries

**Request Body:**

```json

{

  "name": "string (required)",

  "email": "string (required, valid email)",

  "subject": "string (required)",

  "message": "string (required)",

  "timestamp": "datetime (auto-generated)"

}

```

**Response:**

```json

{

  "success": true,

  "message": "Message sent successfully",

  "id": "contact_id"

}

```

**Database Collection**: `contact_messages`

**Fields**:

- id: ObjectId (auto)
- name: String
- email: String
- subject: String
- message: String
- timestamp: DateTime
- status: String (new, read, responded)

### 2. Content Management APIs (Future Enhancement)

**Get Portfolio Data**: `GET /api/portfolio`

**Update Experience**: `PUT /api/experience/{id}`

**Update Projects**: `PUT /api/projects/{id}`

**Update Skills**: `PUT /api/skills`

## Frontend Integration Changes

### 1. Contact Form (Priority)

**File**: `/app/frontend/src/components/Contact.js`

**Changes**:

- Replace mock form submission with actual API call
- Add form validation
- Add success/error messaging with toast notifications
- Add loading states during submission

### 2. Mock Data Removal (Future)

**Files to update**:

- Remove mock.js imports
- Replace static data with API calls
- Add loading states for data fetching

## Content Update Strategy

### Option 1: Direct File Updates (Current)

- Update `/app/frontend/src/mock.js`
- Restart frontend service
- Simple but requires technical knowledge

### Option 2: Admin Panel (Future Enhancement)

- Create admin interface for content management
- Database-driven content
- Non-technical content updates

### Option 3: CMS Integration (Advanced)

- Headless CMS integration
- Real-time content updates
- Advanced content management features

## Implementation Priority

### Phase 1 (Current)

1. ✅ Contact form backend API
2. ✅ Frontend contact form integration
3. ✅ Form validation and error handling
4. ✅ Email notifications (optional)

### Phase 2 (Future)

1. Content management APIs
2. Admin authentication
3. Dynamic content loading
4. Content update interface

## Technical Stack

- **Backend**: FastAPI + MongoDB
- **Frontend**: React + Axios
- **Validation**: Pydantic (backend) + React forms (frontend)
- **Notifications**: Toast notifications for user feedback

## Environment Variables Needed

- SMTP configuration for email notifications (optional)
- Admin credentials for future content management

## Testing Strategy

- Backend API testing with automated tests
- Frontend form testing
- Integration testing for complete flow
- Error handling validation

---

**Next Steps**: Implement contact form backend API and integrate with frontend.
