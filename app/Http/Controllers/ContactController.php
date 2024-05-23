<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $contact = Contact::latest()->paginate(10);
        return Inertia::render('Contact/Contact', [
            'contact' => $contact
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Contact/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ContactRequest $request)
    {
        // If validation passes, you can access the validated data like this:
        $validatedData = $request->validated();

        $contact = new Contact();
        $contact->name      = $request->name;
        $contact->email     = $request->email;
        $contact->number    = $request->number;
        $contact->address   = $request->address;
        $contact->save();

        return redirect()->route('contact.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Contact $contact)
    {

        //
        dd('show');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Contact $contact)
    {
        return Inertia::render('Contact/Edit', [
            'contact' => $contact
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Contact $contact)
    {
        $request->validate([
            'name'      => 'required|string|max:255',
            'email'     => 'required|string|email|max:255',
            'number'    => 'required|numeric|min:0199999999', // Adjust max to fit the actual limit
            'address'   => 'required|string',
        ]);

        $contact->name      = $request->name;
        $contact->number    = $request->number;
        $contact->email     = $request->email;
        $contact->address   = $request->address;
        $contact->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Contact $contact)
    {
        $contact->delete();
    }
}