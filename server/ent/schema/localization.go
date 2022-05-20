package schema

import (
	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
	"entgo.io/ent/schema/index"
)

type Localization struct {
	ent.Schema
}

func (Localization) Fields() []ent.Field {
	return []ent.Field{
		field.Int("language_id"),
		field.String("localizationValue"),
	}
}

func (Localization) Edges() []ent.Edge {
	return []ent.Edge{
		edge.From("language", Language.Type).
			Ref("localizations").
			Unique().
			Field("language_id").
			Required(),
	}
}

func (Localization) Indexes() []ent.Index {
	return []ent.Index{
		index.Fields("language_id"),
	}
}
