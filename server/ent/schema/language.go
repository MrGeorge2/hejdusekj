package schema

import (
	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
)

type Language struct {
	ent.Schema
}

func (Language) Fields() []ent.Field {
	return []ent.Field{
		field.String("languageCode").
			Unique(),
	}
}

func (Language) Edges() []ent.Edge {
	return []ent.Edge{
		edge.To("localizations", Localization.Type),
	}
}
